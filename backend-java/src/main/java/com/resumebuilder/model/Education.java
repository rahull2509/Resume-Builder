package com.resumebuilder.model;
import lombok.Data;
import java.util.UUID;
@Data
public class Education {
    private String id = UUID.randomUUID().toString();
    private String school = "";
    private String degree = "";
    private String field = "";
    private String startDate = "";
    private String endDate = "";
    private String location = "";
    private String details = "";
}
