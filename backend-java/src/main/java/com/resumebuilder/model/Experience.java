package com.resumebuilder.model;
import lombok.Data;
import java.util.List;
import java.util.ArrayList;
import java.util.UUID;
@Data
public class Experience {
    private String id = UUID.randomUUID().toString();
    private String company = "";
    private String role = "";
    private String startDate = "";
    private String endDate = "";
    private String location = "";
    private List<String> bullets = new ArrayList<>();
}
