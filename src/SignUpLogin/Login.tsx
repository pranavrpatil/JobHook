import { rem, TextInput, PasswordInput, Checkbox, Anchor, Button } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import { Link } from 'react-router-dom';

const Login= ()=>{
    return <div className="w-1/2 px-20 flex gap-3 flex-col justify-center">
    <div className="font-semibold text-2xl ">Login</div>
    <TextInput
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="example@gmail.com"
    />

    <PasswordInput
        withAsterisk
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        label="Password"
        placeholder="Password"
    />

    <Button variant="filled" autoContrast>Sign Up</Button>
    <div className='text-mine-shaft-400 mx-auto'>Don't have an account? <Link className='text-bright-sun-400 hover:underline' to="/signup">Sign Up</Link></div>
</div>
}

export default Login;