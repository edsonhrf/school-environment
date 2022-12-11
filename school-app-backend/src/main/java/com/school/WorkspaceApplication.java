package com.school;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@RestController
@EnableSwagger2
public class WorkspaceApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorkspaceApplication.class, args);
        System.out.println(new BCryptPasswordEncoder().encode("student123"));
        System.out.println(new BCryptPasswordEncoder().encode("teacher123"));
    }

    @GetMapping(path = "/hello")
    public String helloSchool() {
        return "Hello, School.";
    }

}