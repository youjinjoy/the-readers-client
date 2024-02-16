import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link, useParams, useNavigate } from "react-router-dom";
import BookShelf from "components/BookShelf";
import AddBook from "pages/RoomLobby/Addbook";
import { BookOpen, LampDeskIcon, LibrarySquare } from "lucide-react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { roomState, isTrailState } from "recoil/atom";

export default function Info() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [room, setRoom] = useRecoilState(roomState);
	const [roomRefresh, setRoomRefresh] = useRecoilState(roomState);
	const [trail, setTrail] = useRecoilState(isTrailState);
	const { roomId, bookId } = useParams();
	const theme = useTheme();
	const navigate = useNavigate();

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleOtherItemClick = (event) => {
		event.stopPropagation(); // 이벤트 전파 방지. 메뉴 계속 켜져있게 하기 위함임.
	};

	const bookClickHandler = (book) => {
		//for animation
		setTrail(false);
		navigate(`/room/${roomId}/book/${book.id}`);
	};

	return (
		<React.Fragment>
			<Tooltip title="Account settings">
				<IconButton
					onClick={handleClick}
					size="small"
					sx={{
						position: "absoulute",
						// right: 16, // 오른쪽에서 16px 떨어진 위치
						bottom: 16, // 아래쪽에서 16px 떨어진 위치
						width: 32,
						height: 32,
						margin: 1,
					}}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<Avatar sx={{ width: 32, height: 32, margin: 1 }}>i</Avatar>
				</IconButton>
			</Tooltip>

			<ThemeProvider theme={theme}>
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					transformOrigin={{ horizontal: "right", vertical: "top" }}
					anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				>
					<MenuItem onClick={handleClose} style={{ cursor: "auto" }}>
						<ListItemIcon>
							<LibrarySquare />
						</ListItemIcon>
						<Link to={`/room/${room.id}`} style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
							방으로 이동 &#40;현재 방: {room && <>{room.title}</>}&#41;
						</Link>
					</MenuItem>

					<MenuItem onClick={handleOtherItemClick} style={{ cursor: "auto" }}>
						<ListItemIcon>
							<BookOpen />
						</ListItemIcon>
						책 목록 &nbsp;
						{room && (
							<>
								<BookShelf books={room.Books} bookId={bookId} bookClickhandler={bookClickHandler} />
							</>
						)}
					</MenuItem>
					<Divider />
					<MenuItem onClick={handleOtherItemClick}>
						{room && (
							<>
								<AddBook key="book" room={room} refresher={setRoomRefresh} />
							</>
						)}
					</MenuItem>
				</Menu>
			</ThemeProvider>
		</React.Fragment>
	);
}
