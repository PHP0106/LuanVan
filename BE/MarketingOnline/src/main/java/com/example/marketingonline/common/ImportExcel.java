package com.example.marketingonline.common;


import com.example.marketingonline.dto.ProductDTO;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ImportExcel {

    public static final int COLUMN_INDEX_PRODUCT_NAME = 0;
    public static final int COLUMN_INDEX_PRODUCT_TYPE = 1;
    public static final int COLUMN_STORE_ID = 2;
    public static final int COLUMN_QUANTITY = 3;
    public static final int COLUMN_VAT = 4;
    public static final int COLUMN_SALE_PRICE = 5;


    public static List<ProductDTO> writeExcel(String fileName) throws IOException {

        List<ProductDTO>  productDTOList = new ArrayList<>();
        InputStream inputStream = new FileInputStream(new File(fileName));
        //Get workbook
        Workbook workbook = new XSSFWorkbook(inputStream);

        //Get sheet
        Sheet sheet = workbook.getSheetAt(0);
        // Get all rows
        Iterator<Row> iterator = sheet.iterator();
        while (iterator.hasNext()) {
            Row nextRow = iterator.next();
            if (nextRow.getRowNum() == 0) {
                continue;
            }
            Iterator<Cell> cellIterator = nextRow.cellIterator();

            // Read cells and set value for book object
            ProductDTO productDTO = new ProductDTO();
            while (cellIterator.hasNext()) {
                Cell cell = cellIterator.next();
                Object cellValue = getCellValue(cell);
                if (cellValue == null || cellValue.toString().isEmpty()) {
                    continue;
                }
                int columnIndex = cell.getColumnIndex();
                switch (columnIndex) {
                    case COLUMN_INDEX_PRODUCT_NAME:
                        productDTO.setProductName((String) getCellValue(cell));
                        break;
                    case COLUMN_INDEX_PRODUCT_TYPE:
                        productDTO.setProductType((int) Math.round ((Double) getCellValue(cell)));
                        break;
                    case COLUMN_STORE_ID:
                        Double storeId = (Double) getCellValue(cell);
                        productDTO.setStoreId((int) Math.round ((Double) getCellValue(cell)));
                        break;
                    case COLUMN_QUANTITY:
                        productDTO.setQuantity((int) Math.round ((Double) getCellValue(cell)));
                        break;
                    case COLUMN_VAT:
                        productDTO.setVat((int) Math.round ((Double) getCellValue(cell)));
                        break;
                    case COLUMN_SALE_PRICE:
                        productDTO.setSalePrice((int) Math.round ((Double) getCellValue(cell)));
                    default:
                        break;
                }
            }
            productDTOList.add(productDTO);
        }
        workbook.close();
        inputStream.close();
        return productDTOList;
    }

    private static Object getCellValue(Cell cell) {
        CellType cellType = cell.getCellTypeEnum();
        Object cellValue = null;
        switch (cellType) {
            case BOOLEAN:
                cellValue = cell.getBooleanCellValue();
                break;
            case FORMULA:
                Workbook workbook = cell.getSheet().getWorkbook();
                FormulaEvaluator evaluator = workbook.getCreationHelper().createFormulaEvaluator();
                cellValue = evaluator.evaluate(cell).getNumberValue();
                break;
            case NUMERIC:
                cellValue = cell.getNumericCellValue();
                break;
            case STRING:
                cellValue = cell.getStringCellValue();
                break;
            case _NONE:
            case BLANK:
            case ERROR:
                break;
            default:
                break;
        }
        return cellValue;
    }


}
