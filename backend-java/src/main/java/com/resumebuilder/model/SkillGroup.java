package com.resumebuilder.model;
import lombok.Data;
import java.util.List;
import java.util.ArrayList;
import java.util.UUID;
@Data
public class SkillGroup {
    private String id = UUID.randomUUID().toString();
    private String category = "";
    private List<String> items = new ArrayList<>();
}
