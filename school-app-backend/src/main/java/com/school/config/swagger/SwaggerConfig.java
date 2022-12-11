package com.school.config.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.ArrayList;

@Configuration
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .apiInfo(metaInfo());
    }

    private ApiInfo metaInfo() {
        ApiInfo apiInfo = new ApiInfo(
                "School API's REST",
                "API's REST of school activities",
                "1.0",
                "Terms of Service",
                new Contact("Edson Henrique", "https://www.linkedin.com/in/edson-henrique-052b60140/", "edsonhrf@gmail.com"),
                "Apache Lincense Version 2.0",
                "https://www.apache.org/licensen.html", new ArrayList<VendorExtension>()
        );

        return apiInfo;
    }
}