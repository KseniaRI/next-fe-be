import { Row } from 'antd';
import { StyledText } from '../shared.styled';
import { ListItem, ListItemTitle } from './ListSection.styled';

export default function ItemsList() {
    // create a test array for the list of items
    const title = 'Title';
    const text =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum';

    const array = new Array(6).fill({ title, text });

    return (
        <Row gutter={[100, 100]}>
            {array.map(({ title, text }, idx) => (
                <ListItem sm={8} xs={12} key={idx}>
                    <ListItemTitle>{title}</ListItemTitle>
                    <StyledText $color="#757575">{text}</StyledText>
                </ListItem>
            ))}
        </Row>
    );
}
