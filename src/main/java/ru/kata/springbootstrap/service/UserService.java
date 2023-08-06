package ru.kata.springbootstrap.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.springbootstrap.model.User;


import java.util.List;
import java.util.Optional;

public interface UserService extends UserDetailsService {
    User findUserById(Long userId);
    Optional<User> findUserByUsername(String username);
    List<User> getAllUsers();
    void saveUser(User user);
    void deleteUser(Long userId);
    void update(Long id, User updatedUser);
}
