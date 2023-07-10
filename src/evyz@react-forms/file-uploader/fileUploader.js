import { useState } from 'react'
import './fileUploader.css'
import { useEffect } from 'react'

const FileUploader = ({options, onUploadFile}) => {

    const [isActive, setIsActive] = useState(false)
    const [data, setData] = useState(null)
    const [pic, setPic] = useState(null)


    useEffect(() => {
        if (options?.showImage) {
            data && data?.name && setPic(URL.createObjectURL(data))
        }
        if (data) {
            onUploadFile && onUploadFile({ picSrc: pic, data})
        }
    }, [data])

    return (
        <div className={`system_fileuploader ${isActive ? "dragable" : ""}`}
            onDragEnter={(e) => {
                setIsActive(true)
            }}
            onDragLeave={() => {
                setIsActive(false)
            }}
            onDrop={(e) => {
                setIsActive(false)
                console.log('e', e)
            }}
        >
            <input onChange={(e) => setData(e.target.files[0])} type="file" />
            <div className='placeholder' >
                {
                    data?.name ?
                        <>
                            <h1>{data?.name}</h1>
                            {pic && <img src={pic} alt={pic} />}
                            <span className='remove'>Remove file</span>
                        </>
                    :
                        <>
                            <h1>Put file here </h1>
                            <span>Or choose file...</span>
                        </>
                }
                
            </div>
        </div>
    )
}

export default FileUploader