import { rem, TextInput, PasswordInput, Checkbox, Anchor, Button } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return <div className="w-full sm:w-1/2 px-20 flex gap-3 flex-col justify-center">
        <div className="font-semibold text-2xl ">Create Account</div>
        <TextInput
            withAsterisk
            label="Full Name"
            placeholder="John Wick"
        />

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

        <PasswordInput
            withAsterisk
            leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            label="Confirm Password"
            placeholder="Confirm Password"
        />

        <Checkbox
            autoContrast
            label={<>I accept {``} <Anchor>terms & conditions</Anchor> </>}
        />
        <Button variant="filled" autoContrast>Sign Up</Button>
        <div className='text-mine-shaft-400 mx-auto'>Have an account? <Link className='text-bright-sun-400 hover:underline' to="/login">Login</Link></div>
    </div>
}

export default SignUp;