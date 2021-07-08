import React, { useState, useCallback } from 'react';

import { Card, Stack, Collapsible, TextContainer, Button } from '@shopify/polaris';
import CustomButton from './CustomButton';
import CustomCard from './CustomCard';

export default function CollapsibleCard( { title, description, buttonTitle, icon }) {
    const [open, setOpen] = useState(true);
    
    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    return (
        <div style={{width: '535px'}}>
                <CustomButton 
                    onPress={handleToggle} 
                    ariaExpanded={open} 
                    ariaControls="basic-collapsible"
                    title={title}
                    icon={icon}/>
                <Stack vertical>
                    <Collapsible 
                        open={!open}
                        id="basic-collapsible"
                        transition={{ duration: '500ms', timingFunction: 'ease-in-out'}}
                        expandOnprint
                    >
                        <CustomCard content={description} buttonTitle={buttonTitle} />                      
                    </Collapsible>
                </Stack>
        </div>
    )
}
