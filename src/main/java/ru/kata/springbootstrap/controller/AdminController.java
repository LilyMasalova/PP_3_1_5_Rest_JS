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
    private final UserService userService;
    private final RoleRepository roleRepository;



    @Autowired
    public AdminController(UserService userService, RoleRepository roleRepository) {
        this.userService = userService;
        this.roleRepository = roleRepository;
    }

    @GetMapping
    public String showUsers(Model model, @AuthenticationPrincipal User curUser, @ModelAttribute("newUser") User newUser) {
        model.addAttribute("userList", userService.getAllUsers());
        model.addAttribute("curUser", curUser);
        model.addAttribute("allRoles", roleRepository.findAll());
        return "index";
    }

    @GetMapping("/new")
    public String newUser(@ModelAttribute("user") User user, Model model, @AuthenticationPrincipal User curUser) {
        model.addAttribute("allRoles", roleRepository.findAll());
        model.addAttribute("curUser", curUser);
        return "new";
    }

    @PostMapping
    public String create(@ModelAttribute("user") @Valid User user) {
        userService.saveUser(user);
        return "redirect:/admin";
    }

    @PatchMapping("/{id}")
    public String editUser(@PathVariable ("id") Long id, @ModelAttribute("user") User user) {
        userService.update(id, user);
        return "redirect:/admin";

    }

    @DeleteMapping("/{id}/delete")
    public String delete(@PathVariable ("id") Long id) {
        userService.deleteUser(id);
        return "redirect:/admin";
    }


}
