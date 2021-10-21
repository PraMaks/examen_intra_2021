package com.pravdinm.examenintra.service;

import com.pravdinm.examenintra.model.GuessUser;
import com.pravdinm.examenintra.repositories.GuessUserRepository;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceIntra {

    private final GuessUserRepository guessUserRepository;

    ServiceIntra(GuessUserRepository guessUserRepository) {
        this.guessUserRepository = guessUserRepository;
    }

    public Optional<GuessUser> createUserGuess(String name, int numberGuessed, int numberActual) {
        Optional<GuessUser> optionalGuessUser = Optional.empty();
        GuessUser guessUser = new GuessUser();
        guessUser.setName(name);
        guessUser.setNumberGuessed(numberGuessed);
        guessUser.setNumberActual(numberActual);

        try {
            optionalGuessUser = Optional.of(guessUserRepository.save(guessUser));
        } catch (DuplicateKeyException exception) {
            exception.printStackTrace();
        }
        return optionalGuessUser;
    }

    public Optional<List<GuessUser>> getAllGuessUsers() {
        Optional<List<GuessUser>> optionalGuessUserList = Optional.empty();

        try {
            optionalGuessUserList = Optional.of(guessUserRepository.findAll());
        } catch (DuplicateKeyException exception) {
            exception.printStackTrace();
        }
        return optionalGuessUserList;
    }


}
