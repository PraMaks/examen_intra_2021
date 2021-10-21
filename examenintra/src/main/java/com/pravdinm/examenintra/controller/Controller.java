package com.pravdinm.examenintra.controller;

import com.pravdinm.examenintra.model.GuessUser;
import com.pravdinm.examenintra.service.ServiceIntra;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Controller {

    private final ServiceIntra service;

    public Controller(ServiceIntra service) {
        this.service = service;
    }

    @PostMapping("/save/{name}/{numberGuessed}/{numberActual}")
    public ResponseEntity<GuessUser> addGuessUser(@PathVariable String name, @PathVariable int numberGuessed, @PathVariable int numberActual) {
        return service.createUserGuess(name, numberGuessed, numberActual)
                .map(_guessUser -> ResponseEntity.status(HttpStatus.ACCEPTED).body(_guessUser))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<GuessUser>> getAllGuessUsers(){
        return service.getAllGuessUsers()
                .map(_guessUsers -> ResponseEntity.status(HttpStatus.ACCEPTED).body(_guessUsers))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
