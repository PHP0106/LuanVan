package com.example.cjx.Extend;

import java.lang.reflect.Field;
import java.util.regex.Pattern;

public class StringUtil {

    private static final Pattern PATTERN_NUMBER = Pattern.compile("-?\\d+(\\.\\d+)?");
    public static final Pattern PATTERN_EMAIL = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    public static boolean isEmail(String s) {
        return (!isNullOrEmpty(s) && PATTERN_EMAIL.matcher(s.trim()).matches());
    }

    public static boolean isNullOrEmpty(final String s) {
        return (s == null || s.trim().length() == 0);
    }

    public static boolean isNumber(final String s) {
        return (!isNullOrEmpty(s) && PATTERN_NUMBER.matcher(s).matches());
    }

    public static boolean isPhoneNumber(final String s) {
        return isNumber(s.trim()) && s.trim().startsWith("0");
    }

//    public static String randomString() {
//        int length = 10;
//        boolean useLetters = true;
//        boolean useNumbers = false;
//        return RandomStringUtils.random(length, useLetters, useNumbers);
//    }

    public static <T> void trimTextInClass(T object) throws IllegalAccessException {
        for(Field field : object.getClass().getDeclaredFields()) {
            field.setAccessible(true);
            if (field.getType().getSimpleName().equalsIgnoreCase("String")) {
                if (field.get(object) != null) {
                    field.set(object, field.get(object).toString().trim());
                }
            }
        }
    }
}
