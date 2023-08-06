package ru.kata.springbootstrap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import ru.kata.springbootstrap.model.User;


public interface UserRepository extends JpaRepository<User,Long> {
    @Query("Select u from User u left join fetch u.roles where u.email=:username")
    User findByUsername(String username);
}
