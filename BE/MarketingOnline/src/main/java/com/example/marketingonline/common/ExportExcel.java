//package com.example.product.Extend;
//
//import com.example.springboot_demo.shop.ShopDTO;
//import org.apache.poi.ss.usermodel.*;
//import org.apache.poi.util.IOUtils;
//import org.apache.poi.xssf.streaming.SXSSFDrawing;
//import org.apache.poi.xssf.streaming.SXSSFPicture;
//import org.apache.poi.xssf.streaming.SXSSFSheet;
//import org.apache.poi.xssf.streaming.SXSSFWorkbook;
//import org.apache.poi.xssf.usermodel.XSSFClientAnchor;
//
//import java.io.*;
//import java.util.List;
//
//public class ExportExcel {
////    private static HSSFCellStyle createStyleForTitle(HSSFWorkbook workbook) {
////        HSSFFont font = workbook.createFont();
////        font.setBold(true);
////        HSSFCellStyle style = workbook.createCellStyle();
////        style.setFont(font);
////        return style;
////    }
//
//    public static ByteArrayInputStream createExcel(List<ShopDTO> listShopDTO) throws IOException {
//
//        SXSSFWorkbook workbook = new SXSSFWorkbook();
//        SXSSFSheet sheet = workbook.createSheet("Products sheet");
//        List<ShopDTO> list = listShopDTO;
//
//
//        File file = new File("D://image");
//        File[] files = file.listFiles();
//
//        int rownum = 0;
//
//        Cell cell;
//        Row row;
//        //
//        CellStyle style = workbook.createCellStyle();
//
//        row = sheet.createRow(rownum);
//
//        // EmpNo
//        cell = row.createCell(0, CellType.STRING);
//        cell.setCellValue("ShopId");
//        cell.setCellStyle(style);
//        // EmpName
//        cell = row.createCell(1, CellType.STRING);
//        cell.setCellValue("ShopCode");
//        cell.setCellStyle(style);
//        // Salary
//        cell = row.createCell(2, CellType.STRING);
//        cell.setCellValue("ShopName");
//        cell.setCellStyle(style);
//        //Image
//        cell = row.createCell(3, CellType.STRING);
//        cell.setCellValue("Image");
//        cell.setCellStyle(style);
//
//        rownum = 1;
//        int i = 0;
//
//        // Data
//        for (ShopDTO shop : list) {
//            row = sheet.createRow(rownum++);
//            cell = row.createCell(0, CellType.NUMERIC);
//            cell.setCellValue(shop.getShopId());
//            cell = row.createCell(1, CellType.STRING);
//            cell.setCellValue(shop.getShopCode());
//            cell = row.createCell(2, CellType.STRING);
//            cell.setCellValue(shop.getShopName());
//            for (; i < files.length; ) {
//                InputStream inputStream = new FileInputStream(files[i]);
//                byte[] bytes = IOUtils.toByteArray(inputStream);
//                int my_picture_id = workbook.addPicture(bytes, Workbook.PICTURE_TYPE_PNG);
//                inputStream.close();
//                SXSSFDrawing drawing = (SXSSFDrawing) sheet.createDrawingPatriarch();
//                XSSFClientAnchor my_anchor = new XSSFClientAnchor();
//                my_anchor.setCol1(3);
//                my_anchor.setRow1(rownum - 1);
//                my_anchor.setCol2(4);
//                my_anchor.setRow2(rownum);
//                SXSSFPicture my_picture = drawing.createPicture(my_anchor, my_picture_id);
//                break;
//            }
//            i++;
//        }
//
//        ByteArrayOutputStream bos = new ByteArrayOutputStream();
//        try {
//            workbook.write(bos);
//        } finally {
//            bos.close();
//        }
//        ByteArrayInputStream input = new ByteArrayInputStream(bos.toByteArray());
//        return input;
//
//    }
//}
