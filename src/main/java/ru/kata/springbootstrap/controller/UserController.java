package ru.kata.springbootstrap.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.springbootstrap.model.User;
import ru.kata.springbootstrap.repository.RoleRepository;


@Controller
public class UserController {
    private final RoleRepository roleRepository;
    @Autowired
    public UserController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @GetMapping("/user")
    public String indexPage(Model model, @AuthenticationPrincipal User curUser) {
        model.addAttribute("curUser", curUser);
        model.addAttribute("allRoles", roleRepository.findAll());
        return "user";

    }
}
