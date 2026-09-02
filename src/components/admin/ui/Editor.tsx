"use client";

import { useApi } from "@/src/service/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
 

import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Heading,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Link,
  List,
  TodoList,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  Table,
  TableToolbar,
  BlockQuote,
  Code,
  CodeBlock,
  HorizontalLine,
  Alignment,
  Font,
  Highlight,
  AutoImage,
  Indent,
  IndentBlock,
  RemoveFormat,
  SelectAll,
  PasteFromOffice,
  GeneralHtmlSupport,
  FileLoader,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  lang? : string
}

type FileL = {
  file : File
}

export default function Editor({ value, onChange , lang = "fa" }: Props) {

    const api = useApi();

  return (
    <div dir="rtl">
      <CKEditor
        onReady={editor => {
            // آپلود سفارشی عکس (سمت سرور لاراول)
            editor.plugins.get('FileRepository').createUploadAdapter = (loader : any) => {
                return {
                    upload: async () => {
                        const file = await loader.file
                        const formData : FormData = new FormData()
                        formData.append('upload', file)
                        const res = await api.post('/panel/upload-ckeditor' , formData , {
                            headers: {
                              "Content-Type": "multipart/form-data",
                            },
                          })
                        return { default: res.data.url }
                    }
                }
            }
        }}
        editor={ClassicEditor}
        config={{
          licenseKey: "GPL",

          language: {
            ui: lang,
            content: lang,
          },

          plugins: [
            Essentials,
            Paragraph,
            Heading,
            Bold,
            Italic,
            Underline,
            Strikethrough,
            Subscript,
            Superscript,
            Link,
            List,
            TodoList,
            Image,
            ImageToolbar,
            ImageCaption,
            ImageStyle,
            ImageResize,
            ImageUpload,
            AutoImage,
            Table,
            TableToolbar,
            BlockQuote,
            Code,
            CodeBlock,
            HorizontalLine,
            Alignment,
            Font,
            Highlight,
            Indent,
            IndentBlock,
            RemoveFormat,
            SelectAll,
            PasteFromOffice,
            GeneralHtmlSupport,
          ],

          toolbar: [
            "undo",
            "redo",
            "|",
          
            "heading",
            "|",
          
            "fontFamily",
            "fontSize",
            "fontColor",
            "fontBackgroundColor",
            "|",
          
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "subscript",
            "superscript",
            "removeFormat",
            "|",
          
            "highlight",
            "|",
          
            "alignment",
            "outdent",
            "indent",
            "|",
          
            "bulletedList",
            "numberedList",
            "todoList",
            "|",
          
            "link",
            "uploadImage",
            "insertTable",
            "|",
          
            "blockQuote",
            "code",
            "codeBlock",
            "horizontalLine",
          ],
          htmlSupport: {
            allow: [
              {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true,
              },
            ],
          },
          image: {
            resizeUnit: "%",
            toolbar: [
              "imageStyle:inline",
              "imageStyle:block",
              "imageStyle:side",
              "|",
              "resizeImage:25",
              "resizeImage:50",
              "resizeImage:75",
              "resizeImage:100",
              "|",
              "toggleImageCaption",
              "imageTextAlternative",
            ],
          },

          fontSize: {
            options: [
              10,
              12,
              14,
              "default",
              18,
              20,
              22,
              24,
              28,
              32,
              36,
              48,
            ],
            supportAllValues: true,
          },
          
          fontFamily: {
            supportAllValues: true,
          },
          
          fontColor: {
            columns: 8,
          },
          
          fontBackgroundColor: {
            columns: 8,
          },

          table: {
            contentToolbar: [
              "tableColumn",
              "tableRow",
              "mergeTableCells",
              "toggleTableCaption",
            ],
          },
        }}
        data={value}
        onChange={(_, editor) => {
          onChange(editor.getData());
        }}
       
      />
    </div>
  );
}