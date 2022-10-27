package com.school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class WorkspaceApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorkspaceApplication.class, args);
    }

    @GetMapping(path = "/hello")
    public String helloSchool() {
        return "Hello, School.";
    }

}