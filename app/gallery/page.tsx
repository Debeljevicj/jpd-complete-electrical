import { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
    title: 'Project Gallery | JPD Complete Electrical Adelaide',
    description: 'View our portfolio of residential and commercial electrical projects across Adelaide. High-quality workmanship in lighting, switchboards, and more.',
};

export default function GalleryPage() {
    return <GalleryContent />;
}
