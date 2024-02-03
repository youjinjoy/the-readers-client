import React, { useEffect } from "react";
import { Box, Drawer, Container, Avatar, Tooltip, IconButton } from "@mui/material";
import LoginForm from "components/Header/SideDrawer/form/LogInForm";
import ProfileCard from "components/Header/SideDrawer/form/ProfileCard";
import { useRecoilState } from "recoil";
import { userState, drawerFormState } from "recoil/atom";
import { useToggleDrawer } from "recoil/handler";
import SignUpForm from "components/Header/SideDrawer/form/SignUpForm";

export default function SideDrawer() {
	const [user, setUser] = useRecoilState(userState);
	const [state, setState] = useRecoilState(drawerFormState);
	const toggleDrawer = useToggleDrawer();

	const avatar = user?.token ? (
		<Tooltip title="프로필 보기">
			<IconButton onClick={toggleDrawer("profile")} sx={{ p: 0 }}>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
			</IconButton>
		</Tooltip>
	) : (
		<Tooltip title="로그인">
			<IconButton onClick={toggleDrawer("signin")} sx={{ p: 0 }}>
				<Avatar alt="Login" src="/src/guest_prifle.jpg" />
			</IconButton>
		</Tooltip>
	);

	return (
		<>
			<Box sx={{ flexGrow: 0 }}>{avatar}</Box>
			<Drawer anchor="right" open={state != "none"} onClose={toggleDrawer("none")}>
				<Container fixedWidth="sm">
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: 300,
						}}
					>
						{state == "signin" && <LoginForm setUser={setUser} isLogin={user?.token} />}
						{state == "signup" && <SignUpForm />}
						{state == "profile" && user && <ProfileCard user={user} />}
					</Box>
				</Container>
			</Drawer>
		</>
	);
}