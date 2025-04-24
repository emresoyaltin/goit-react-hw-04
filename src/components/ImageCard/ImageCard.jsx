export default function ImageCard({ imageItem, onClick }) {
    return (
        <img 
            src={imageItem.urls.small} 
            alt={imageItem.alt_description} 
            onClick={() => onClick(imageItem.urls.full)} 
            style={{ cursor: 'pointer', width: '100%' }}
        />
    );
}
