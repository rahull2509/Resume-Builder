package com.resumebuilder.controller;

import com.resumebuilder.model.Resume;
import com.resumebuilder.model.ResumeSummary;
import com.resumebuilder.model.TemplateDto;
import com.resumebuilder.repository.ResumeRepository;
import com.resumebuilder.service.PdfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ResumeController {

    @Autowired
    private ResumeRepository repository;

    @Autowired
    private PdfService pdfService;

    @Autowired
    private TemplateEngine templateEngine;

    @GetMapping("/")
    public Map<String, String> root() {
        return Map.of("message", "Resume Builder API (Java)", "version", "1.0.0");
    }

    @GetMapping("/templates")
    public List<TemplateDto> listTemplates() {
        return List.of(
            new TemplateDto("classic", "The Classic", "ATS-optimized, single column. High legibility."),
            new TemplateDto("architect", "The Architect", "Modern sidebar layout, structured."),
            new TemplateDto("editorial", "The Editorial", "Magazine-style with terracotta accents.")
        );
    }

    @PostMapping("/resumes")
    public Resume createResume(@RequestBody Resume resume) {
        resume.setCreatedAt(Instant.now());
        resume.setUpdatedAt(Instant.now());
        return repository.save(resume);
    }

    @GetMapping("/resumes")
    public List<ResumeSummary> listResumes() {
        return repository.findAllByOrderByUpdatedAtDesc().stream()
                .map(r -> new ResumeSummary(r.getId(), r.getName(), r.getTemplate(), r.getUpdatedAt()))
                .collect(Collectors.toList());
    }

    @GetMapping("/resumes/{id}")
    public ResponseEntity<Resume> getResume(@PathVariable String id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/resumes/{id}")
    public ResponseEntity<Resume> updateResume(@PathVariable String id, @RequestBody Resume resume) {
        return repository.findById(id).map(existing -> {
            resume.setId(id);
            resume.setCreatedAt(existing.getCreatedAt());
            resume.setUpdatedAt(Instant.now());
            return ResponseEntity.ok(repository.save(resume));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/resumes/{id}")
    public ResponseEntity<Void> deleteResume(@PathVariable String id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/export-pdf")
    public ResponseEntity<byte[]> exportPdf(@RequestBody Resume resume) {
        try {
            Context context = new Context();
            context.setVariable("r", resume);
            String templateName = resume.getTemplate() != null ? resume.getTemplate() : "classic";
            String html = templateEngine.process(templateName, context);
            
            byte[] pdf = pdfService.generatePdfFromHtml(html);
            
            String safeName = "resume";
            if (resume.getPersonal() != null && resume.getPersonal().getFullName() != null && !resume.getPersonal().getFullName().isEmpty()) {
                safeName = resume.getPersonal().getFullName().trim().replace(" ", "_");
            } else if (resume.getName() != null) {
                safeName = resume.getName().trim().replace(" ", "_");
            }
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);
            headers.setContentDispositionFormData("attachment", safeName + ".pdf");
            return new ResponseEntity<>(pdf, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<byte[]>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/resumes/{id}/pdf")
    public ResponseEntity<byte[]> exportSavedPdf(@PathVariable String id) {
        return repository.findById(id).map(resume -> {
            try {
                Context context = new Context();
                context.setVariable("r", resume);
                String templateName = resume.getTemplate() != null ? resume.getTemplate() : "classic";
                String html = templateEngine.process(templateName, context);
                
                byte[] pdf = pdfService.generatePdfFromHtml(html);
                
                String safeName = "resume";
                if (resume.getPersonal() != null && resume.getPersonal().getFullName() != null && !resume.getPersonal().getFullName().isEmpty()) {
                    safeName = resume.getPersonal().getFullName().trim().replace(" ", "_");
                } else if (resume.getName() != null) {
                    safeName = resume.getName().trim().replace(" ", "_");
                }
                
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_PDF);
                headers.setContentDispositionFormData("attachment", safeName + ".pdf");
                return new ResponseEntity<>(pdf, headers, HttpStatus.OK);
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<byte[]>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }).orElse(new ResponseEntity<byte[]>(HttpStatus.NOT_FOUND));
    }
}
