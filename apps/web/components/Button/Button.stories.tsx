import React from 'react';
import Button from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'components/Button',
    component: Button,
};

export const HeaderButton = () => (
    <Button evt={() => console.log('oi')} PlaceHolder={'Something'} />
);
