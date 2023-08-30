package ru.kata.springbootstrap.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.springbootstrap.model.User;
import ru.kata.springbootstrap.service.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class MyRestController {
    private final UserService userService;
    public MyRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> showUsers() {
       return userService.getAllUsers();
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody  User user) {
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("ok");
    }

    @PutMapping
    public ResponseEntity<String> editUser(@RequestBody  User user) {
        userService.update(user.getId(), user);
        return ResponseEntity.status(HttpStatus.CREATED).body("ok");
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.CREATED).body("ok");
    }
}
