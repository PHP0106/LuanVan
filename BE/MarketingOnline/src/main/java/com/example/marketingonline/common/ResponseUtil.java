package com.example.marketingonline.common;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;

import java.util.HashMap;
import java.util.List;

public class ResponseUtil {

    public static String successful = "Successful";

    public static String notFound = " not found";
    public static String exist = " already exist";
    public static String notValid = " not valid";

    public static Integer unknownCode = 400;
    public static Integer notFoundCode = 401;
    public static Integer existCode = 402;
    public static Integer notValidCode = 403;

    public static HashMap<String, Object> succeedForm() {
        HashMap<String, Object> response = new HashMap<>();
        response.put("errorCode", HttpStatus.OK.value());
        response.put("message", successful);
        return response;
    }

    public static HashMap<String, Object> succeed() {
        HashMap<String, Object> response = succeedForm();
        response.put("data", null);
        return response;
    }

    public static HashMap<String, Object> succeed(Object object) {
        HashMap<String, Object> response = succeedForm();
        response.put("data", object);
        return response;
    }

    public static HashMap<String, Object> succeed(List<?> list) {
        HashMap<String, Object> data = new HashMap<>();
        data.put("totalRecords", list.size());
        data.put("list", list);
        HashMap<String, Object> response = succeedForm();
        response.put("data", data);
        return response;
    }

    public static HashMap<String, Object> succeed(HashMap<String, Object> map) {
        HashMap<String, Object> response = succeedForm();
        response.put("data", map);
        return response;
    }

    public static HashMap<String, Object> succeed(Page<?> page) {
        HashMap<String, Object> response = succeedForm();
        HashMap<String, Object> data = new HashMap<>();
        data.put("list", page.getContent());
        data.put("totalRecords", page.getTotalElements());
        data.put("totalPages", page.getTotalPages());
        data.put("currentPage", page.getNumber());
        data.put("pageSize", page.getSize());
        response.put("data", data);
        return response;
    }

    public static HashMap<String, Object> error(String error, Integer code) {
        HashMap<String, Object> response = new HashMap<>();
        response.put("errorCode", code);
        response.put("message", error);
        return response;
    }

    public static HashMap<String, Object> errorData(String error, Integer code, Object object) {
        HashMap<String, Object> response = error(error, code);
        if (object instanceof HashMap) {
            response.put("data", object);
        } else {
            if (object instanceof List) {
                HashMap<String, Object> data = new HashMap<>();
                data.put("totalRecords", ((List<?>) object).size());
                data.put("list", object);
                response.put("data", data);
            } else {
                response.put("data", object);
            }
        }
        return response;
    }

    public static HashMap<String, Object> errorNotFound(String name, Object data) {
        return errorData(name + notFound, notFoundCode, data);
    }

    public static HashMap<String, Object> errorNotFound(String name) {
        return errorData(name + notFound, notFoundCode, null);
    }

    public static HashMap<String, Object> errorExist(String name, Object data) {
        return errorData(name + exist, existCode, data);
    }

    public static HashMap<String, Object> errorExist(String name) {
        return errorData(name + exist, existCode, null);
    }

    public static HashMap<String, Object> errorNotValid(String name) {
        return errorData(name + notValid, notValidCode, null);
    }
}
