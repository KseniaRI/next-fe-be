import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { VideoWrap } from './Hero.styled';

export default function VideoFrame() {
    return (
        <VideoWrap>
            <LiteYouTubeEmbed
                id="dQw4w9WgXcQ"
                poster="hqdefault"
                title="Rick Astley - Never Gonna Give You Up"
            />
        </VideoWrap>
    );
}
