package com.resumebuilder.service;
import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;
import java.io.ByteArrayOutputStream;
@Service
public class PdfService {
    public byte[] generatePdfFromHtml(String html) throws Exception {
        Document document = Jsoup.parse(html, "UTF-8");
        document.outputSettings().syntax(Document.OutputSettings.Syntax.xml);
        try (ByteArrayOutputStream os = new ByteArrayOutputStream()) {
            PdfRendererBuilder builder = new PdfRendererBuilder();
            builder.useFastMode();
            builder.withHtmlContent(document.html(), null);
            builder.toStream(os);
            builder.run();
            return os.toByteArray();
        }
    }
}
