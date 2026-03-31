interface GoldDividerProps {
  className?: string;
  fade?: boolean;
}

export function GoldDivider({ className = "", fade = false }: GoldDividerProps) {
  if (fade) {
    return (
      <div
        className={`h-px w-full ${className}`}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,168,76,0.35) 40%, rgba(201,168,76,0.35) 60%, transparent)",
        }}
      />
    );
  }

  return (
    <hr
      className={`border-0 border-t h-px ${className}`}
      style={{ borderColor: "rgba(201,168,76,0.20)" }}
    />
  );
}
