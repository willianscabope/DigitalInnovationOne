package com.ProNetFlix;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProNetFlixController {

	
	@GetMapping("/")
    public String listas(Model model) {
        
        return "index";
    }
	
	
	
}
