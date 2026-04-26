package com.resumebuilder.model;
import lombok.Data;
import java.util.List;
import java.util.ArrayList;
import java.util.UUID;
@Data
public class Project {
    private String id = UUID.randomUUID().toString();
    private String name = "";
    private String link = "";
    private String tech = "";
    private String description = "";
    private List<String> bullets = new ArrayList<>();
}
