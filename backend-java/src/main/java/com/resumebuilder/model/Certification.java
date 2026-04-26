package com.resumebuilder.model;
import lombok.Data;
import java.util.UUID;
@Data
public class Certification {
    private String id = UUID.randomUUID().toString();
    private String name = "";
    private String issuer = "";
    private String date = "";
    private String link = "";
}
