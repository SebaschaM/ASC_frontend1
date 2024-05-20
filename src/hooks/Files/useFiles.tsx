import apiClient from "../../api/ApiClient";

const useFiles = () => {
    const uploadFile = async (file: File, postulanteId: Number): Promise<any> => {
        try {
            const formData = new FormData();
            formData.append('file', file); // 'file' debe coincidir con lo que espera multer
            formData.append('postulanteId', postulanteId.toString());

            const response = await apiClient.put('/files/upload-file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const responseData = response.data;

            return {
                response: responseData,
                status: response.status,
                ok: true,
            };
        } catch (err: any) {
            console.error(err);
            // Manejo de errores
        }
    };

    //DELETE http://localhost:3000/api/files/delete-file
    const deleteFile = async (postulanteId: Number): Promise<any> => {
        try {
            const response = await apiClient.delete('/files/delete-file', {
                data: {
                    postulanteId,
                },
            });
            const responseData = response.data;

            return {
                response: responseData,
                status: response.status,
                ok: true,
            };
        } catch (err: any) {
            console.error(err);
            // Manejo de errores
        }
    }


    return {
        uploadFile,
        deleteFile
    };
};

export default useFiles;