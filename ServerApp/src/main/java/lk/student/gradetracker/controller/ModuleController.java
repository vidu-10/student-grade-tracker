package lk.student.gradetracker.controller;


import lk.student.gradetracker.dao.ModuleDao;
import lk.student.gradetracker.entity.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping(value = "/modules")
public class ModuleController {

    @Autowired
    private ModuleDao moduledao;

    @GetMapping(produces = "application/json")
//    @PreAuthorize("hasAuthority('employee-select')")p
    public List<Module> get(@RequestParam HashMap<String, String> params) {

        List<Module> modules = this.moduledao.findAll();

        return modules;
    }

    @GetMapping(path ="/list",produces = "application/json")
    public List<Module> get() {

        List<Module> modules = this.moduledao.findAll();

        modules = modules.stream().map(
                module -> { Module m = new Module();
                            m.setId(module.getId());
                            m.setName(module.getName());
                            return m; }
        ).collect(Collectors.toList());

        return modules;

    }

}


