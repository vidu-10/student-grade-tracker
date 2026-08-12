package lk.student.gradetracker.controller;

import lk.student.gradetracker.dao.NotificationDao;
import lk.student.gradetracker.entity.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@CrossOrigin
@RestController
@RequestMapping(value = "/notifications")
public class NotificationController {
    @Autowired
    private NotificationDao notificationDao;

    @GetMapping(produces = "application/json")
    public List<Notification> get(@RequestParam HashMap<String, String> params) {
        List<Notification> notifications = this.notificationDao.findAll();

        if (params.isEmpty()) {
            return notifications;
        }

        String role = params.get("role");
        String isread = params.get("isread");

        Stream<Notification> cstream = notifications.stream();

        if (role != null)
            cstream = cstream.filter(n -> n.getRole().equals(role));

        if (isread != null)
            cstream = cstream.filter(n -> n.getIsread() == Boolean.parseBoolean(isread));

        return cstream.collect(Collectors.toList());
    }


    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
//    @PreAuthorize("hasAuthority('Employee-Update')")
    public HashMap<String,String> update(@RequestBody Notification notification){

        HashMap<String,String> responce = new HashMap<>();
        String errors="";

        if (errors.isEmpty())
            notificationDao.save(notification);
        else
            errors = "Server Validation Errors : <br> " + errors;

        responce.put("id",String.valueOf(notification.getId()));
        responce.put("url","/notifications/"+notification.getId());
        responce.put("errors",errors);

        return responce;
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public HashMap<String,String> delete(@PathVariable Integer id){

        System.out.println(id);

        HashMap<String,String> responce = new HashMap<>();
        String errors="";

        Notification notification = notificationDao.findByMyId(id);
        if (notification == null)
            errors = errors + "<br> Notification not found";

        if (errors.isEmpty())
            notificationDao.delete(notification);
        else
            errors = "Server Validation Errors : <br> " + errors;

        responce.put("id",String.valueOf(id));
        responce.put("url","/notifications/"+id);
        responce.put("errors",errors);

        return responce;
    }
}