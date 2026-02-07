"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [pageWidth, setPageWidth] = useState(800);

  return (
    <div className="flex justify-center">
      <Document
        file={file}
        loading={
          <div className="flex items-center justify-center h-[800px]">
            <div className="text-gray-500">Loading PDF...</div>
          </div>
        }
        error={
          <div className="flex items-center justify-center h-[800px]">
            <div className="text-red-500">Failed to load PDF</div>
          </div>
        }
      >
        <Page
          pageNumber={1}
          width={pageWidth}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
