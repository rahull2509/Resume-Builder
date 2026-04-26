package com.resumebuilder.model;
import lombok.Data;
import java.time.Instant;
@Data
public class ResumeSummary {
    private String id;
    private String name;
    private String template;
    private Instant updatedAt;
    public ResumeSummary(String id, String name, String template, Instant updatedAt) {
        this.id = id; this.name = name; this.template = template; this.updatedAt = updatedAt;
    }
}
