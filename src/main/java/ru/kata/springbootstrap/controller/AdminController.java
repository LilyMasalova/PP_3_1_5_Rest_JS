package ru.kata.springbootstrap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.springbootstrap.model.User;
import ru.kata.springbootstrap.repository.RoleRepository;
import ru.kata.springbootstrap.service.UserService;

import javax.validation.Valid;


@Controller
@RequestMapping("/admin")
public class AdminController {
    @GetMapping
    public String index(Model model, @AuthenticationPrincipal User curUser) {
        model.addAttribute("curUser", curUser);
        return "index";
    }

}
