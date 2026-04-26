package com.resumebuilder.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.time.Instant;

@Data
@Document(collection = "resumes")
public class Resume {
    @Id
    private String id = UUID.randomUUID().toString();
    private String name = "Untitled Resume";
    private String template = "classic";
    private Personal personal = new Personal();
    private List<Education> education = new ArrayList<>();
    private List<Experience> experience = new ArrayList<>();
    private List<Project> projects = new ArrayList<>();
    private List<SkillGroup> skills = new ArrayList<>();
    private List<Certification> certifications = new ArrayList<>();
    private Instant createdAt = Instant.now();
    private Instant updatedAt = Instant.now();
}
