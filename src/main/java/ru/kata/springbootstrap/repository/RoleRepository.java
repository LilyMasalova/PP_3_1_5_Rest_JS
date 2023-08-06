package ru.kata.springbootstrap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kata.springbootstrap.model.Role;


public interface RoleRepository extends JpaRepository<Role, Long> {
}
