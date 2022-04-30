FROM golang:1.18.1 as build
WORKDIR /src
COPY app.go .
RUN go mod init app && \
    go mod tidy && \
    go build -o /app .

FROM scratch as bin
COPY --from=build app /
CMD ["/app"]