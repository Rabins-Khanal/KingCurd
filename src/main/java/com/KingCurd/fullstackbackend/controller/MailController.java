package com.KingCurd.fullstackbackend.controller;

import com.KingCurd.fullstackbackend.model.MailStructure;
import com.KingCurd.fullstackbackend.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mail")


public class MailController {
    @Autowired
    private MailService mailService;


    @PostMapping("/send/{mail}")
    public String sendMail(@PathVariable String mail, @RequestBody MailStructure mailStructure) {


        mailService.sendMail(mail, mailStructure);
        return "Your KingCurd account has been created!";
    }



}
