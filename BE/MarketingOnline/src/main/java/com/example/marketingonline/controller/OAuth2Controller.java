package com.example.marketingonline.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/auth")
public class OAuth2Controller {

    @GetMapping(value = "/current")
    public Principal getCurrentUser(Principal principal){
        return principal;
    }
}
