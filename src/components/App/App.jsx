import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";
import { fetchGallery } from '../../GalleryService';
import css from './App.module.css';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

export default function App() {
    const [photocards, setPhotocards] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearch = (query) => {
        setSearchItem(query);
        setPhotocards([]);
        setPage(1);
    }

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    async function getPhotocards() {
        try {
            setError(false);
            setIsLoading(true);
            const data = await fetchGallery(searchItem, page);
            // setPhotocards(data)
            setPhotocards((prevPhotocards) => {
                return [...prevPhotocards, ...data];
            })
            
        }
        catch {
                toast.error('Please reload a page there was an error!')
                setError(true);
        }
        finally {
            setIsLoading(false);
        }
    }


    useEffect (() =>{

        if (!searchItem) return;

        getPhotocards();
    }, [searchItem, page])

    return (

        <>
        <SearchBar onSearch = {handleSearch}/>
        {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <ClipLoader color="#3f51b5" size={40} />
                </div>
            )}

        {error && <b>Whoops, there was an error, please reload this page...</b>}
        {photocards.length > 0 && (
        <ImageGallery 
            galleryItems={photocards}
            onImageClick={handleImageClick}
        />
        )}
        {selectedImage && (
            <ImageModal
                isOpen={true}
                onClose={closeModal}
                imageUrl={selectedImage}
            />
        )}
        {photocards.length > 0 && ( <LoadMoreBtn onClick={() => setPage(prev => prev + 1)}/>
            )}
        <Toaster />
        </>
    )
}
