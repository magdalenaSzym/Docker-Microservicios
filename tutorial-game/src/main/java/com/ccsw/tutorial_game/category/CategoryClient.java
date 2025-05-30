package com.ccsw.tutorial_game.category;

import com.ccsw.tutorial_game.category.model.CategoryDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@FeignClient(value = "SPRING-CLOUD-EUREKA-CLIENT-CATEGORY")
public interface CategoryClient {

    @GetMapping(value = "/category")
    List<CategoryDto> findAll();

}
