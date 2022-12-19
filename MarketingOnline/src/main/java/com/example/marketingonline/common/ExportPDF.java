//package com.example.product.Extend;
//
//
//import com.example.springboot_demo.shop.ShopDTO;
//import com.itextpdf.text.*;
//import com.itextpdf.text.pdf.BaseFont;
//import com.itextpdf.text.pdf.PdfPCell;
//import com.itextpdf.text.pdf.PdfPTable;
//import com.itextpdf.text.pdf.PdfWriter;
//
//import java.io.*;
//import java.util.List;
//
//public class ExportPDF {
//
//    private static final String bucketName = "photo";
//
//
//    public static ByteArrayInputStream createPDF(List<ShopDTO> listShopDTO) throws DocumentException, IOException {
//
//
//
//        Document document = new Document();
//        List<ShopDTO> list = listShopDTO;
//        ByteArrayOutputStream stream = new ByteArrayOutputStream();
//        PdfWriter.getInstance(document, stream);
//
////        try {
//
//        PdfWriter.getInstance(document, new FileOutputStream(new File("D://tmp/itext.pdf")));
//
//
//        //open
//        document.open();
//        Font f = new Font(BaseFont.createFont("D://tmp/vuArial.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED));
//        // Lấy List Image
//        File file = new File("D://image");
//
//        File[] files = file.listFiles();
//
//        PdfPTable t = new PdfPTable(4);
//        t.setSpacingBefore(25);
//        t.setSpacingAfter(25);
//
//        PdfPCell c1 = new PdfPCell(new Phrase("ID", f));
//        t.addCell(c1);
//        PdfPCell c2 = new PdfPCell(new Phrase("Shop Code", f));
//        t.addCell(c2);
//        PdfPCell c3 = new PdfPCell(new Phrase("Shop Name", f));
//        t.addCell(c3);
//        PdfPCell c4 = new PdfPCell(new Phrase("Image", f));
//        t.addCell(c4);
////            document.add(t);
//        int i = 0;
//        for (ShopDTO prd : list) {
//
//            t.addCell(new PdfPCell(new Phrase(String.valueOf(prd.getShopId()), f)));
//            t.addCell(new PdfPCell(new Phrase(prd.getShopCode(), f)));
//            t.addCell(new PdfPCell(new Phrase(prd.getShopName(), f)));
//            if (i < files.length) {
//                Image image1 = Image.getInstance(String.valueOf(files[i]));
//                t.addCell(image1);
//            } else {
//                t.addCell("");
//            }
//            i++;
//
//
//        }
//
//
//        document.add(t);
//
//        document.close();
//
//        return new ByteArrayInputStream(stream.toByteArray());
//
//    }
//}