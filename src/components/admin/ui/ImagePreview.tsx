export default function ImagePreview({image} : {image : string , }){
    return(
        <div className="mt-2">
        <p className="mb-2 text-sm text-slate-500">پیش‌نمایش</p>
  
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm w-fit">
          <img
            src={
              image
            }
            alt="Preview"
            className="h-48 w-80 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    )
}