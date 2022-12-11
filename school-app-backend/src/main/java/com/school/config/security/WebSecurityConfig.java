package com.school.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

//    USED IN NEW VERSIONS OF SPRING SECURITY (VERSIONS EQUALS OR BIGGER THEN 5.7 VERSION)
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .csrf().disable();
        return http.build();
    }

//    USED IN OLD VERSIONS OF SPRING SECURITY (VERSIONS LESS THEN 5.7 VERSION)

//    @Autowired
//    UserDetailsServiceImpl userDetailsService;
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .httpBasic()
//                .and()
//                .authorizeRequests()
//                .anyRequest().authenticated()
//                .and()
//                .csrf().disable();
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService)
//                .passwordEncoder(passwordEncoder());
//    }

//  IS REQUIRED IN ANY VERSION OF SPRING SECURITY
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}