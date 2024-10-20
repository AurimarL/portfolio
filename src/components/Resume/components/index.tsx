"use client";
import { Text, View, Link } from "@react-pdf/renderer";
import type {
	IResumeContact,
	IResumeEducation,
	IResumeExperience,
	IResumeLanguages,
	IResumeProject,
	IResumeSkill,
} from "@/types";

export function Texto({
	children,
	size = 10,
}: {
	children?: string;
	size?: number;
}) {
	return (
		<Text
			style={{
				fontSize: size,
			}}
		>
			{children}
		</Text>
	);
}
export function ResumeLanguages({
	data,
}: {
	data: IResumeLanguages;
}) {
	return (
		<View id="Languages">
			<Texto size={14}>{data.label}</Texto>
			<View>
				{data.items.map((e, i) => {
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					return <Texto key={i}>{e.name}</Texto>;
				})}
			</View>
		</View>
	);
}

export function LinkTexto({
	children,
	href,
}: {
	children?: string;
	href: string;
}) {
	return (
		<Link src={href}>
			<Texto>{children}</Texto>
		</Link>
	);
}

export function ResumeContactMe({
	data,
}: {
	data: IResumeContact;
}) {
	return (
		<View
			id="Contact Me"
			style={{
				gap: 4,
			}}
		>
			<Texto size={14}>{data.label}</Texto>
			<View
				style={{
					gap: 4,
				}}
			>
				<LinkTexto href={data.portfolioLink}>Portfolio</LinkTexto>
				<LinkTexto href={data.github}>GitHub</LinkTexto>
				<LinkTexto href={data.linkedin}>LinkedIn</LinkTexto>
				<Texto>{data.mobile}</Texto>
				<Texto>{data.email}</Texto>
			</View>
		</View>
	);
}

export function ResumeSkills({
	data,
}: {
	data: IResumeSkill;
}) {
	return (
		<View
			id="Skills"
			style={{
				gap: 4,
			}}
		>
			<Texto size={14}>{data.label}</Texto>
			<View
				style={{
					gap: 4,
				}}
			>
				{data.items.map((e, i) => {
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					return <Texto key={i}>{e.name}</Texto>;
				})}
			</View>
		</View>
	);
}

export function ResumeProjects({
	data,
}: {
	data: IResumeProject;
}) {
	return (
		<View
			id="Projects"
			style={{
				gap: 4,
			}}
		>
			<Texto size={18}>{`${data.label}:`}</Texto>
			<View
				style={{
					gap: 4,
				}}
			>
				{data.items.map((e, i) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<View key={i}>
							<Texto size={16}>{e.name}</Texto>
							<Texto size={14}>{e.description}</Texto>
						</View>
					);
				})}
			</View>
		</View>
	);
}

export function ResumeExperience({
	data,
}: {
	data: IResumeExperience;
}) {
	return (
		<View
			id="Experience"
			style={{
				gap: 4,
			}}
		>
			<Texto size={18}>{`${data.label}:`}</Texto>
			<View
				style={{
					gap: 4,
				}}
			>
				{data.items.map((e, i) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<View key={i}>
							<View>
								<Texto size={14}>{e.company}</Texto>
								<Texto size={12}>{e.title}</Texto>
								<Texto>{e.date}</Texto>
							</View>
							<View>
								<Texto>{e.description}</Texto>
							</View>
						</View>
					);
				})}
			</View>
		</View>
	);
}

export function ResumeEducation({
	data,
}: {
	data: IResumeEducation;
}) {
	return (
		<View id="Education">
			<Texto size={18}>{`${data.label}:`}</Texto>
			<View
				style={{
					gap: 8,
				}}
			>
				{data.items.map((e, i) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<View key={i}>
							<View>
								<Texto>{e.school}</Texto>
								<Texto>{e.major}</Texto>
								<Texto>{e.date}</Texto>
							</View>
						</View>
					);
				})}
			</View>
		</View>
	);
}
