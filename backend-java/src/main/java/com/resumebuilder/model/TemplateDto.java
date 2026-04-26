package com.resumebuilder.model;
import lombok.Data;
@Data
public class TemplateDto {
    private String id;
    private String name;
    private String description;
    public TemplateDto(String id, String name, String description) {
        this.id = id; this.name = name; this.description = description;
    }
}
