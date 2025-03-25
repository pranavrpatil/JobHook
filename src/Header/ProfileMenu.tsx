import { Menu, Text, Avatar, Switch } from '@mantine/core';
import {
    IconMessageCircle,
    IconLogout2,
    IconUserCircle,
    IconFileText,
    IconMoonFilled, IconSun, IconMoonStars
} from '@tabler/icons-react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

const ProfileMenu = () => {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);

    return (
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}  >
            <Menu.Target>
                <div className="flex gap-2 items-center ">
                    <div>Code Crafter</div>
                    <Avatar className="cursor-pointer" src="avatar.png" alt="Profile Image" />
                </div>
            </Menu.Target>
            
            <Menu.Dropdown onChange={()=>setOpened(true)}>
                <Link to='/profile'>
                    <Menu.Item leftSection={<IconUserCircle size={14} />}>
                        Profile
                    </Menu.Item>
                </Link>
                
                <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconFileText size={14} />}>
                    Resume
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconMoonFilled size={14} />}
                    rightSection={
                        <Text size="xs" c="dimmed">
                            <Switch
                                checked={checked}
                                onChange={(event) => setChecked(event.currentTarget.checked)}
                                size="md"
                                color="dark.4"
                                onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
                                offLabel={<IconMoonStars size={16} stroke={2.5} color="cyan" />}
                            />
                        </Text>
                    }
                >
                    Dark Mode
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 size={14} />}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default ProfileMenu;